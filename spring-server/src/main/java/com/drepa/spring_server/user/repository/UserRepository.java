package com.drepa.spring_server.user.repository;

import com.drepa.spring_server.user.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
}
