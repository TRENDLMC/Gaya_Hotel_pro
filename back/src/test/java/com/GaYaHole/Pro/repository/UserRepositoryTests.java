package com.GaYaHole.Pro.repository;

import com.GaYaHole.Pro.entity.User;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.annotation.Commit;

import java.util.stream.IntStream;

@SpringBootTest
public class UserRepositoryTests {

    @Autowired
    private UserRepository userRepository;


    @Test
    @Commit
    public void insertTest(){
        IntStream.rangeClosed(1,10).forEach(i->{

            User user = User.builder()
                    .id("id..."+i)
                    .password("testpwd"+i)
                    .name("testname"+i)
                    .grade(i%2)
                    .address_1("testadr1..."+i)
                    .address_2("testadr2..."+i)
                    .email("testemail"+i)
                    .phone_number1("010")
                    .phone_number2("12"+i)
                    .phone_number3("34"+i)
                    .build();

            System.out.println(userRepository.save(user));

        });
    }
}
