package com.ptmcc;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
//扫描控制器类
@ComponentScan(basePackages="com.ptmcc.controller")
public class SpringBootStart {
    public static void main(String [] args){
        SpringApplication.run(SpringBootStart.class,args);
    }
}