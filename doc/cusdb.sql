
create database cusdb;

create user 'cus'@'localhost' identified by 'Cus!2019';

grant all privileges on cusdb.* to 'cus'@'localhost';

flush privileges;

-- mysql -u cus -p

drop table if exists `activity`;
create table `activity` (`id` varchar(16) not null comment '活动编码',
`name` varchar(64) not null comment '活动名称',
`act_desc` varchar(512) default null comment '活动描述',
`channel_id` int default 0 comment '活动渠道',
`create_time` datetime default null comment '创建时间',
`begin_time` datetime default null comment '开始时间',
`end_time` datetime default null comment '结束时间',
primary key (id) using btree
);

insert into `activity` values ('ACT00001',  '2019年宽带满意度问卷调查', null, 1, '2019-10-07 10:00:00',
'2019-10-07 10:00:00',
'2019-12-31 23:59:59');

commit;

drop table if exists `access`;
create table `access` (
`openid` int not null auto_increment primary key,
`mobile` varchar(64) not null comment '手机号码',
`check_code` varchar(8) not null comment '验证码',
`access_time` datetime default null comment '发送时间',
index (mobile) using btree
);