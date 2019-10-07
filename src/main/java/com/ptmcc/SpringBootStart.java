package com.ptmcc;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan(basePackages="com.ptmcc.controller")
@MapperScan(basePackages = "com.ptmcc.mapper")
public class SpringBootStart {
    public static void main(String [] args){
        SpringApplication.run(SpringBootStart.class,args);
    }
}