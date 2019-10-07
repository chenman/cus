package com.ptmcc.controller;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.ptmcc.bean.Access;
import com.ptmcc.common.JsonResult;
import com.ptmcc.common.JsonResultEnum;
import com.ptmcc.common.JsonResultMethod;
import com.ptmcc.mapper.AccessMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

@Controller
public class UserController {

    @Autowired
    private AccessMapper accessMapper;

    @ResponseBody
    @RequestMapping(value = "/api/getValidCode", produces = "application/json; charset=utf-8", method = {
            RequestMethod.GET, RequestMethod.POST })
    public JsonResult getValidCode(HttpServletRequest request, HttpSession session) {
        String mobile = request.getParameter("mobile");

        System.out.println(mobile);

        int random = (int)(Math.random()*10000);
        String checkCode = String.format("%04d", random);
        System.out.println(checkCode);
        Map<String, Integer> map =new HashMap<String, Integer>();
        map.put("send", 1);

        Access access = new Access();
        access.setMobile(mobile);
        access.setCheckCode(checkCode);
        access.setAccessTime(new Date());
        accessMapper.insert(access);

        // TODO : 调用MAS接口发送验证码
        return JsonResultMethod.code_200("发送验证码成功.", map);
    }

    @ResponseBody
    @RequestMapping(value = "/api/login", produces = "application/json; charset=utf-8", method = {
            RequestMethod.GET, RequestMethod.POST })
    public JsonResult login(HttpServletRequest request, HttpSession session) {
        String mobile = request.getParameter("mobile");
        String checkCode = request.getParameter("checkCode");

        Access access = accessMapper.selectOne(new QueryWrapper<Access>().eq("mobile", mobile).orderByDesc("access_time").last("limit 1"));

        if (access == null)
            return JsonResultMethod.code(JsonResultEnum.NULL_CODE);
        else if(!access.getCheckCode().equals(checkCode))
            return JsonResultMethod.code(JsonResultEnum.INVALID_CODE);
        else {
            Map<String, Integer> map =new HashMap<String, Integer>();
            map.put("openid", access.getOpenid());
            return JsonResultMethod.code_200("登录成功.", map);
        }
    }
}
