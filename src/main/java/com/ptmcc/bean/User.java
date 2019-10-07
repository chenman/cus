package com.ptmcc.bean;

import lombok.Data;

import java.io.Serializable;

@Data
public class User implements Serializable {
    private static final long serialVersionUID = 1L;

    private String mobile;

    private String userName;

    private String userId;

    public User(){}
}
