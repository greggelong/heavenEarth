# Ten heavenly stems and Twelve earthly branches

We are coming up on year 40 of the 60 year cycle in the Chinese calender.

This year will be the "yin water rabbit", 癸卯, guǐmaǒ

The sixty year cycle is made of the Ten heavenly stems and Twelve earthly branches,

You can create the calendar by counting along (not matching) the two up modulo their lengths over 60 years


this calendar is not a cartesian product of all pairs. but half that. because of the five elements that have yin and yang 


you can see this clearly in the python script I have included


    '''you can see here that the combination of the lists is not a cartesian product
    which would = 120 the combination of each element of the list without repeat.
    but is just half that as there is no yin water rat, or yin water monkey, they are only yang '''
    
it is almost like you can discover yin ness and yang ness through matching heaven stems with earthly branches

for example think of a two smaller sets of even number elements and count them out

[a,b]

[1,2,3,4]

if you count along the same way as the Chinese calendar you get 

a1, b2, a3, b4, a1......

you will never get a2 or b1

note: this is not the case with odd and even sets

[a,b]

[1,2,3]

a1,b2,a3,b1,a2,b3


is there a general rule for this count along?

if both even the pairs are 1/2 the product

if odd and even the pairs are the product 


[a,b,c]

[1,2,3]

a1, b2, c3, 


[a,b,c]

[1,2,3,4,5]

a1,b2,c3,a4,b5,c1,a2, b3,c4,a5,b1,c2,a3,b4,c5,a1


There will never be for example a gui (yin water) zi (rat)
heaven_stem_ch=['甲','乙','丙','丁','戊','己','庚','辛','壬','癸'] 
heaven_stem_pin=['jiǎ','yǐ','bǐng','dīng','wù','jǐ','gēng','xīn','rén','guǐ']
earth_branch_ch=['子','丑','寅','卯','辰','巳','午','未','申','酉','戌','亥']
earth_branch_pin=['zǐ','chǒu','yín','maǒ','chén','sì','wǔ','weì','shēn','yǒu','xū','haì']
earth_branch_eng=['Rat','Ox','Tiger','Rabbit','Dragon','Snake','Horse','Sheep','Monkey','Rooster','Dog','Pig']