def rotate_list_right(data, amount):
    """
    Rotate the 'data' to the right by the 
    'amount'.   For example, if the data is 
    [1, 2, 3, 4, 5, 6, 7, 8, 9] and an amount
    is 5 then the list returned should be 
    [5, 6, 7, 8, 9, 1, 2, 3, 4].  The value 
    of amount will be in the range of 1 and 
    len(data).
    """
    listRotation = []
    for n in range(1, len(data) + 1):
        # print(n)
        datalist = n
        listRotation.append(datalist)
    result = listRotation 

    index = listRotation.index(amount)
    
    half_list = []

    for num in range(0, index + 1):
        number = listRotation.pop(-1)
        half_list.append(number)

    rotated_list = sorted(half_list) + result

    return rotated_list

print(rotate_list_right([1,2,3,4,5,6,7,8,9],1)) # [9, 1, 2, 3, 4, 5, 6, 7, 8]
print(rotate_list_right([1,2,3,4,5,6,7,8,9],5)) # [5, 6, 7, 8, 9, 1, 2, 3, 4]
print(rotate_list_right([1,2,3,4,5,6,7,8,9],9)) # [1, 2, 3, 4, 5, 6, 7, 8, 9]