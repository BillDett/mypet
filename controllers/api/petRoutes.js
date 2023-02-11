const router = require('express').Router();

const {Pet, Condition} = require('../../models');

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
      res.status(200).json(pet);
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
Returns: your current Pet object (updated based on the attention)

< This is a dispatch for lots of possible ways to give your Pet attention>

*/

module.exports = router;
