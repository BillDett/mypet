# My Pet

Every User gets one Pet at a time.

A Pet is created and needs `attention`. 

Users give `attention` to their pets in various ways:
* Feeding (avoids hunger)
* Praising (avoids sadness and anger)
* Healing (avoids sickness)
* Instructing (avoids mischeviousness)
* Provoking (creates anger and sadness)
* Disciplining (creates sadness but might reduce mischeviousness)

Each Pet is created with a specific set of `characteristics`:
* agreeability - how likely they are to be pleasant or unpleasant
* robustness - how likely they are to get sick or need sleep
* playfulness - how likely they are to want to play vs. sleep/wander
* mischeviousness - how likely they are to cause trouble
* teachability - how lkely they are to take instruction
* adaptability - how likely they are to respond to attention

Each Pet's `condition` can be defined via various factors:
* alive (true/false)
* hungry
* tired
* healthy
* attitude (angry vs. pleasant)
* mood (sad vs. happy)

User `attention` and `characteristics` will affect each of these `condition` factors differently. For example, if a robust pet is hungry and they are fed, the hunger is reduced and happiness goes up. If a different pet is hungry and fed but not as robust, they may not be as happy afterwards and eventually get sick. If provoked, a pet's anger will rise and it may become more mischevious.

Left alone, the pet will take certain `actions` based on their overall `condition`:
* sleep
* eat
* play
* wander (default if things are 'nominal')
* preen
* hiss
* cause trouble
* be sick
* poop


If a pet does not receive attention in a sufficent amount of time, it will eventually die.
* too long going hungry without food
* too long going sick without medicine
* too long going tired without sleep (e.g. too much Provoking or Discipline)

A User can rename their Pet at any time.

When a Pet dies, it's placed in the Cemetery. A User can see all of their expired Pets in one place. When a Pet dies, the User can request another one.