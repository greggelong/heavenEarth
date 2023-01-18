a = [ 'a', 'b','c','d']
b = [1,2,3,4,5,6,7,8,9,10]

heavenchi = ["甲", "乙", "丙", "丁", "戊", "己", "庚", "辛", "壬", "癸"];
earth=['Rat','Ox','Tiger','Rabbit','Dragon','Snake','Horse','Sheep','Monkey','Rooster','Dog','Pig']
heaven=['jiǎ','yǐ','bǐng','dīng','wù','jǐ','gēng','xīn','rén','guǐ']
count =0
while count <60:
    c = heaven[count%len(heaven)]
    d = earth[count%len(earth)]

    e = c+d 
    print(count+1,e) 
    if e == 'rén'+'Rat':
        print("there is a yang water rat")
    if e == 'guǐ'+'Rat':
        print("there is a yin water rat")
        break
   
    count+=1

    '''you can see here that the combination of the lists is not a cartesian product
    which would = 120 the combination of each element of the list without repeat
    but is just half that as there is no yin water rat, or yin water monkey, they are only yang '''
    