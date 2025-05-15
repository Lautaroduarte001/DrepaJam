package com.drepa.spring_server.user.dto;

import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class RegisterRequest {
    private String username;
    private String fullName;
    private String password;
    private String email;
    private String phoneNumber;

}

