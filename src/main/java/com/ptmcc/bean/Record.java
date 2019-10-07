package com.ptmcc.bean;

import lombok.Data;

import java.io.Serializable;
import java.util.Date;

@Data
public class Record implements Serializable {
    private static final long serialVersionUID = 1L;

    private String mobile;

    private String result;

    private Date recordTime;

    private String actId;
}
