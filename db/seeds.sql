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
    VALUES ("Leslie", "Knope", 1, 1),
    ("April", "Ludgate", 2, null),
    ("Ron", "Swanson", 3, 1),
    ("Ann", "Perkins", 4, null),
    ("Donna", "Meagle", 5, 1),
    ("Ben", "Wyatt", 6, null),
    ("Andy", "Dwyer", 7, 1),
    ("Tom", "Haverford", 8, null),
    ("Chris", "Traeger", 9, null)