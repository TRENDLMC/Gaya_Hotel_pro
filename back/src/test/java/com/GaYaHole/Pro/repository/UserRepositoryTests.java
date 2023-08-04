package com.GaYaHole.Pro.repository;

import com.GaYaHole.Pro.entity.User;
import org.junit.jupiter.api.Test;
import org.mockito.internal.matchers.Null;
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
                    .pwd("testpwd"+i)
                    .name("testname"+i)
                    .grade(i%2)
                    .add1("testadr1..."+i)
                    .add2("testadr2..."+i)
                    .email("testemail"+i)
                    .p_num1("010")
                    .p_num2("12"+i)
                    .p_num3("34"+i)
                    .build();

            System.out.println(userRepository.save(user));

        });
    }

    @Test
    public void idTest(){
        int num=100;
        int result;
        String 입력받은아이디 ="test43";
        result = userRepository.idtest(입력받은아이디);

        if(result>0){
            num = 0; //중복
        }else{
            num = 1; //중복아님
        }


        System.out.println("반환될 값 : "+num);

    }
}
