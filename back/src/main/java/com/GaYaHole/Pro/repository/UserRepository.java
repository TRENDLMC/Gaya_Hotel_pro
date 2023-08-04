package com.GaYaHole.Pro.repository;

import com.GaYaHole.Pro.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.querydsl.QuerydslPredicateExecutor;
import org.springframework.data.repository.query.Param;

public interface UserRepository extends JpaRepository<User, Integer>{

    //아이디 중복 검사
    @Query(value="select count(id) from user where id = :testid" , nativeQuery = true)
    int idtest(@Param("testid") String testID);

    @Query(value="select count(id) from user where id = :loginid and pwd = :loginpwd", nativeQuery = true)
    int logintest(@Param("loginid") String loginID, @Param("loginpwd") String loginPwd);
}
