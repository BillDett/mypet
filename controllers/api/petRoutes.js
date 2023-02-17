const router = require('express').Router();

const {User, Pet, Action} = require('../../models');
const {Effect, Condition} = require('../../conditioning');

const FEED = 'feed';

/*

GET /pet/:user_id
Returns: a Pet for that User (creating one if none exists). This is the main service to see what's going on with your pet.

*/
router.get('/:user_id', async (req,res) => {
    try {
      let pet = await Pet.findOne({
         where: { user_id: req.params.user_id }
        });
      if ( pet === null ) {
        pet = await Pet.create(Pet.generateNewPet(req.params.user_id));
      }
      Condition.current(pet).then(currentPet => {
        res.status(200).json(currentPet);
      });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

/*

POST /pet/attention
Body:
  {
    type: INTEGER
    quantity: INTEGER
  }
Returns:

200 - attention received
400 - invalid attention
500 - something went wrong

*/
router.post('/:pet_id/:attention/:amount', async (req,res) => {
  try {
    let pet = await Pet.findOne({
       where: { id: req.params.pet_id }
      });
    if ( pet === null ) {
      res.status(404).json("Cannot find pet with id " + req.params.pet_id);
    }
    let success = false;
    switch(req.params.attention) {
      case FEED:
        success = await Effect.feed(pet);
        break;
      default: {
        res.status(400).json("Unknown attention " + req.params.attention + " given.");
      }
    }
    if (success) {
      res.status(200).json("Attention " + req.params.attention + " successfully given.");
    } else {
      res.status(500).json("Attention " + req.params.attention + " did not complete successfully.");
    }
  } catch (err) {
      console.log(err);
      res.status(500).json(err);
  }
});

module.exports = router;
