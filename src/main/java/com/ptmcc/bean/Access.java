package com.ptmcc.bean;

import lombok.Data;

import java.io.Serializable;
import java.util.Date;

@Data
public class Access implements Serializable {

    private static final long serialVersionUID = 1L;
    private Integer openid;
    private String mobile;
    private String checkCode;
    private Date accessTime;
}
