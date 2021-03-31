package com.eugenioamn.forum.controller.dto;

import com.eugenioamn.forum.model.Topic;
import com.eugenioamn.forum.model.TopicStatus;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

public class TopicDetailsDto {

    private Long id;
    private String title;
    private String message;
    private LocalDateTime creationDate;
    private String authorName;
    private TopicStatus status;
    private List<AnswerDto> answers;

    public TopicDetailsDto(Topic topic) {
        id = topic.getId();
        title = topic.getTitle();
        message = topic.getMessage();
        creationDate = topic.getCreationDate();
        authorName = topic.getAuthor().getName();
        status = topic.getStatus();
        answers = new ArrayList<>();
        answers.addAll(topic.getAnswers()
                .stream()
                .map(AnswerDto::new)
                .collect(Collectors.toList()));
    }

    public Long getId() {
        return id;
    }

    public String getTitle() {
        return title;
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

    public TopicStatus getStatus() {
        return status;
    }

    public List<AnswerDto> getAnswers() {
        return answers;
    }
}
