package com.ptmcc.controller;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.ptmcc.bean.Activity;
import com.ptmcc.common.JsonResult;
import com.ptmcc.common.JsonResultMethod;
import com.ptmcc.mapper.ActivityMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

@Controller
public class ActivityController {
    @Autowired
    private ActivityMapper activityMapper;

    @ResponseBody
    @RequestMapping(value = "/api/getActivity", produces = "application/json; charset=utf-8", method = {
            RequestMethod.GET, RequestMethod.POST })
    public JsonResult getActivity(HttpServletRequest request, HttpSession session) {
        String id = request.getParameter("id");
        System.out.println(id);
        Activity activity = activityMapper.selectOne(new QueryWrapper<Activity>().eq("id", id));
        return JsonResultMethod.code_200("获取活动信息.", activity);
    }

}
