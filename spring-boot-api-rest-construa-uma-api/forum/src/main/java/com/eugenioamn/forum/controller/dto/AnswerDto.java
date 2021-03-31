package com.eugenioamn.forum.controller.dto;

import com.eugenioamn.forum.model.Answer;

import java.time.LocalDateTime;

public class AnswerDto {

    private Long id;
    private String message;
    private LocalDateTime creationDate;
    private String authorName;

    public AnswerDto(Answer answer) {
        id = answer.getId();
        message = answer.getMessage();
        creationDate = answer.getCreationDate();
        authorName = answer.getAuthor().getName();
    }

    public Long getId() {
        return id;
    }

    public String getMessage() {
        return message;
    }

    public LocalDateTime getCreationDate() {
        return creationDate;
    }

    public String getAuthorName() {
        return authorName;
    }
}
