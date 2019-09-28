package com.ptmcc.controller;

import com.ptmcc.bean.UserInfo;
import com.ptmcc.common.JsonResult;
import com.ptmcc.common.JsonResultMethod;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

@Controller
public class UserController {

    @ResponseBody
    @RequestMapping(value = "/api/getUserInfo", produces = "application/json; charset=utf-8", method = {
            RequestMethod.GET, RequestMethod.POST })
    public JsonResult getUserInfo(HttpServletRequest request, HttpSession session) {
        String id = request.getParameter("id");

        System.out.println(id);
        UserInfo user = new UserInfo();
        user.setActivityPO("");
        return JsonResultMethod.code_200("获取用户信息.", user);
    }

    @ResponseBody
    @RequestMapping(value = "/api/getValidCode", produces = "application/json; charset=utf-8", method = {
            RequestMethod.GET, RequestMethod.POST })
    public JsonResult getValidCode(HttpServletRequest request, HttpSession session) {
        String mobile = request.getParameter("mobile");

        System.out.println(mobile);
        // TODO : 发送验证码


        return JsonResultMethod.code_200("发送验证码成功.", null);
    }
}
