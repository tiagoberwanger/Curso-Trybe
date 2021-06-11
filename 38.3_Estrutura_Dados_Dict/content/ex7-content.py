estudantes = ['a', 'b', 'c', 'd', 'e', 'f', 'g']
lista1_entregues = ['a', 'd', 'g', 'c']
lista2_entregues = ['c', 'a', 'f']


def not_delivered_list1(students, list):
    set_students = set(students)
    set_list = set(list)
    return set_students.difference(set_list)


def delivered_two_lists(students, list1, list2):
    set_students = set(students)
    set_list1 = set(list1)
    set_list2 = set(list2)
    intersection_lists = set_list1.intersection(set_list2)
    set_lists = intersection_lists.intersection(set_students)
    return set_lists


def delivered_any_of_lists(students, list1, list2):
    set_students = set(students)
    set_list1 = set(list1)
    set_list2 = set(list2)
    union_lists = set_list1.union(set_list2)
    set_lists = union_lists.intersection(set_students)
    return set_lists


def delivered_none_of_lists(students, list1, list2):
    set_students = set(students)
    set_list1 = set(list1)
    set_list2 = set(list2)
    union_lists = set_list1.union(set_list2)
    set_lists = set_students.difference(union_lists)
    return set_lists


print(not_delivered_list1(estudantes, lista1_entregues))
print(delivered_two_lists(estudantes, lista1_entregues, lista2_entregues))
print(delivered_any_of_lists(estudantes, lista1_entregues, lista2_entregues))
print(delivered_none_of_lists(estudantes, lista1_entregues, lista2_entregues))
