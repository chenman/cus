package com.ptmcc.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.http.HttpServletResponse;

@Controller
public class TestController {
    @RequestMapping("/test")
    public String index(Model model, HttpServletResponse response) {
        System.out.println("test");
        return "lottery";
    }
}