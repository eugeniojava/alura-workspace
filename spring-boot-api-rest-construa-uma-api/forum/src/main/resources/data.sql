INSERT INTO user (name, email, password)
VALUES ('Student', 'student@email.com', '123456');

INSERT INTO course (name, category)
VALUES ('Spring Boot', 'Programming');

INSERT INTO course (name, category)
VALUES ('HTML 5', 'Front end');

INSERT INTO topic (title, message, creation_date, status, author_id, course_id)
VALUES ('Doubt', 'Error creating the project', '2021-01-05 18:00:00',
        'NOT_ANSWERED', 1, 1);

INSERT INTO topic (title, message, creation_date, status, author_id, course_id)
VALUES ('Doubt 2', 'Project not working', '2021-01-05 19:00:00',
        'NOT_ANSWERED', 1, 1);

INSERT INTO topic (title, message, creation_date, status, author_id, course_id)
VALUES ('Doubt 3', 'HTML tag', '2021-01-05 20:00:00', 'NOT_ANSWERED', 1, 2);
