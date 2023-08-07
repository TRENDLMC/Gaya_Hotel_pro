package com.GaYaHole.Pro.repository;

import com.GaYaHole.Pro.entity.Option;
import com.GaYaHole.Pro.entity.User;
import org.junit.jupiter.api.Test;
import org.mockito.internal.matchers.Null;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.annotation.Commit;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.IntStream;

@SpringBootTest
public class UserRepositoryTests {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private OptionRepository optionRepository;

//
//    @Test
//    @Commit
//    public void insertTest(){
//        IntStream.rangeClosed(1,10).forEach(i->{
//
//            User user = User.builder()
//                    .id("id..."+i)
//                    .pwd("testpwd"+i)
//                    .name("testname"+i)
//                    .grade(i%2)
//                    .add1("testadr1..."+i)
//                    .add2("testadr2..."+i)
//                    .email("testemail"+i)
//                    .p_num1("010")
//                    .p_num2("12"+i)
//                    .p_num3("34"+i)
//                    .build();
//
//            System.out.println(userRepository.save(user));
//
//        });
//    }

    @Test
    public void idTest(){ //아이디 체크 테스트

        int num=100; //아무거나로 초기화
        int result; //받아올 값 보기 편하게
        String 입력받은아이디 ="test43";
        result = userRepository.idtest(입력받은아이디);

        if(result>0){ //같은 아이디가 0개 초과할때
            num = 0; //중복
        }else{
            num = 1; //중복아님
        }


        System.out.println("반환될 값 : "+num);

    }

    @Test
    public void loginTest(){

        String loginId ="test";
        String loginPwd = "12346";

        int result; //받아올 값 보기 편하게
        result = userRepository.logintest(loginId, loginPwd);

        if(result==1){
            System.out.println( "로그인 성공");
        }
        else{
            System.out.println( "로그인 실패");
        }

    }

    @Test
    public void parsingTest(){

        String option_code = "ABD";
        List<String> optionList = new ArrayList<String>();

        String[] splitStr = option_code.split("");
        for(int i=0; i< splitStr.length; i++){
            optionList.add(splitStr[i]);
        }

        System.out.println(optionList);


        List<Option> options = new ArrayList<Option>();


        for (int i=0; i<optionList.size(); i++){
            options.add(optionRepository.optionselect(optionList.get(i)));
        }



        System.out.println(options);


    }
}
