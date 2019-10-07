package com.ptmcc.bean;

import lombok.Data;

import java.io.Serializable;
import java.util.Date;

@Data
public class Activity implements Serializable {
    private static final long serialVersionUID = 1L;

    private String id;

    private String name;

    private String actDesc;

    private String channelId;

    private Date createTime;

    private Date beginTime;

    private Date endTime;
}
