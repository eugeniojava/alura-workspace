package com.eugenioamn.forum.controller;

import com.eugenioamn.forum.controller.dto.TopicDetailsDto;
import com.eugenioamn.forum.controller.dto.TopicDto;
import com.eugenioamn.forum.controller.form.TopicForm;
import com.eugenioamn.forum.controller.form.UpdateTopicForm;
import com.eugenioamn.forum.model.Topic;
import com.eugenioamn.forum.repository.CourseRepository;
import com.eugenioamn.forum.repository.TopicRepository;
import org.apache.coyote.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;

import javax.transaction.Transactional;
import javax.validation.Valid;
import java.net.URI;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/topics")
public class TopicController {

    @Autowired
    private TopicRepository topicRepository;

    @Autowired
    private CourseRepository courseRepository;

    @GetMapping
    public List<TopicDto> find(String courseName) {
        if (courseName == null) {
            List<Topic> topics = topicRepository.findAll();

            return TopicDto.convert(topics);
        }
        List<Topic> topics = topicRepository.findByCourseName(courseName);

        return TopicDto.convert(topics);
    }

    @PostMapping
    @Transactional
    public ResponseEntity<TopicDto> create(
            @Valid @RequestBody TopicForm topicForm,
            UriComponentsBuilder uriComponentsBuilder) {
        Topic topic = topicForm.convert(courseRepository);

        topicRepository.save(topic);
        URI uri =
                uriComponentsBuilder
                        .path("/topics/{id}")
                        .buildAndExpand(topic.getId())
                        .toUri();

        return ResponseEntity.created(uri).body(new TopicDto(topic));
    }

    @GetMapping("/{id}")
    public ResponseEntity<TopicDetailsDto> findById(@PathVariable Long id) {
        Optional<Topic> topic = topicRepository.findById(id);

        if (topic.isPresent()) {
            return ResponseEntity.ok(new TopicDetailsDto(topic.get()));
        }
        return ResponseEntity.notFound().build();
    }

    @PutMapping("/{id}")
    @Transactional
    public ResponseEntity<TopicDto> update(
            @PathVariable Long id,
            @Valid @RequestBody UpdateTopicForm updateTopicForm) {
        Optional<Topic> optionalTopic = topicRepository.findById(id);

        if (optionalTopic.isPresent()) {
            Topic topic = updateTopicForm.update(id, topicRepository);

            return ResponseEntity.ok(new TopicDto(topic));
        }
        return ResponseEntity.notFound().build();
    }

    @DeleteMapping("/{id}")
    @Transactional
    public ResponseEntity<?> delete(@PathVariable Long id) {
        Optional<Topic> optionalTopic = topicRepository.findById(id);

        if (optionalTopic.isPresent()) {
            topicRepository.deleteById(id);

            return ResponseEntity.ok().build();
        }
        return ResponseEntity.notFound().build();
    }
}
