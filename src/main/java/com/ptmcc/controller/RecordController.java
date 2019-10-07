package com.ptmcc.controller;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.ptmcc.bean.Activity;
import com.ptmcc.bean.Record;
import com.ptmcc.common.JsonResult;
import com.ptmcc.common.JsonResultMethod;
import com.ptmcc.mapper.RecordMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.util.Date;

@Controller
public class RecordController {
    @Autowired
    private RecordMapper recordMapper;

    @ResponseBody
    @RequestMapping(value = "/api/recordSelect", produces = "application/json; charset=utf-8", method = {
            RequestMethod.GET, RequestMethod.POST })
    public JsonResult recordSelect(HttpServletRequest request, HttpSession session) {
        String mobile = request.getParameter("mobile");
        String actId = request.getParameter("actId");
        String result = request.getParameter("result");

        Record record = new Record();

        record.setMobile(mobile);
        record.setActId(actId);
        record.setResult(result);
        record.setRecordTime(new Date());

        recordMapper.insert(record);

        return JsonResultMethod.code_200("成功参与调查.", null);
    }
}
