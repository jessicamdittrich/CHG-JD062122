INSERT INTO department (name)
    VALUES ("Project Manager"), ("Developer"), ("Designer"), ("Administration");

INSERT INTO role (title, salary, department_id)
    VALUES ("Senior Project Manager", 200000, 1), 
    ("Project Management", 125000, 1), 
    ("Senior Developer", 175000, 2), 
    ("Junior Developer", 100000, 2), 
    ("Senior Graphic Designer", 150000, 3), 
    ("Junior Graphic Designer", 80000, 3), 
    ("Office Manager", 100000, 4), 
    ("Administrative Assistant", 60000, 4), 
    ("Receptionist", 60000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
    VALUES ("Leslie", "Knope", 1, null),
    ("April", "Ludgate", 2, 1),
    ("Ron", "Swanson", 3, null),
    ("Ann", "Perkins", 4, 3),
    ("Donna", "Meagle", 5, null),
    ("Ben", "Wyatt", 6, 5),
    ("Andy", "Dwyer", 7, null),
    ("Tom", "Haverford", 8, 7),
    ("Chris", "Traeger", 9, 7)