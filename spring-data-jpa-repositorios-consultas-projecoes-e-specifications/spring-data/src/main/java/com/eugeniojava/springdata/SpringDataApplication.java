package com.eugeniojava.springdata;

import com.eugeniojava.springdata.orm.Role;
import com.eugeniojava.springdata.repository.RoleRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class SpringDataApplication implements CommandLineRunner {

    private final RoleRepository roleRepository;

    public SpringDataApplication(RoleRepository roleRepository) {
        this.roleRepository = roleRepository;
    }

    public static void main(String[] args) {
        SpringApplication.run(SpringDataApplication.class, args);
    }

    @Override
    public void run(String... args) throws Exception {
        Role role = new Role();

        role.setDescription("Software developer");

        roleRepository.save(role);
    }
}
