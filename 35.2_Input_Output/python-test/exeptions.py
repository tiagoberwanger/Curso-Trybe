apprStudents = []
with open("file.txt") as gradesFile:
    for line in gradesFile:
        student_grade = line
        student_grade = student_grade.split(" ")
        if int(student_grade[1]) >= 6:
            apprStudents.append(student_grade[0] + "\n")


with open("apprStudents.txt", mode="w") as apprStudentsFile:
    print(apprStudents)
    apprStudentsFile.writelines(apprStudents)
    