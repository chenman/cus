package com.ptmcc.bean;

import java.io.Serializable;

public class UserInfo implements Serializable {
    /**
     *
     */
    private static final long serialVersionUID = 1L;

    private String activityPO;

    public String getActivityPO() {
        return activityPO;
    }

    public void setActivityPO(String activityPO) {
        this.activityPO = activityPO;
    }
}
