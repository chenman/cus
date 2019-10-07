package com.ptmcc.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletResponse;

@Controller
public class TestController {
    @RequestMapping("/test")
    public String index(Model model, HttpServletResponse response) {
        System.out.println("test");
        return "lottery";
    }

    @RequestMapping("/sayHello.html")
    public @ResponseBody
    String sayHello(String name) {
        System.out.println("The name is " + name);
        return "hello " + name;
    }
}