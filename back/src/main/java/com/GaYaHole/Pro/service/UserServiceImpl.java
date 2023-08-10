package com.GaYaHole.Pro.service;

import com.GaYaHole.Pro.config.JwtAuthenticationFilter;
import com.GaYaHole.Pro.config.TokenProvider;
import com.GaYaHole.Pro.entity.Option;
import com.GaYaHole.Pro.entity.Reservation;
import com.GaYaHole.Pro.entity.User;
import com.GaYaHole.Pro.repository.ReservationRepository;
import com.GaYaHole.Pro.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.factory.PasswordEncoderFactories;
import org.springframework.stereotype.Service;

import javax.servlet.ServletRequest;
import java.util.List;
import java.util.Optional;

@Service
public class UserServiceImpl implements UserService{


    @Autowired
    TokenProvider tokenProvider;
    @Autowired
    UserRepository userRepository;

    @Autowired
    ReservationRepository reservationRepository;

    @Autowired
    JwtAuthenticationFilter jwtAuthenticationFilter;


    @Override
    public void join(User user) {

        BCryptPasswordEncoder changePwd = new BCryptPasswordEncoder();
        user.setPwd(changePwd.encode(user.getPwd()));

        userRepository.save(user);
    }

    @Override
    public String login(User user) {

//        User user3 = userRepository.userinfo(user.getId());
//        Optional<User> user2 = findById(user.getId());
//
//        BCryptPasswordEncoder hashPwd = new BCryptPasswordEncoder();
//        System.out.println("user 패스워드 : " + user.getPwd());
//        System.out.println("user3 패스워드 : " + user3.getPwd());
//
//        if(hashPwd.matches(user3.getPwd(), user.getPwd())){
//                System.out.println("맞음");
//
//            String token=tokenProvider.create(user3);
//            return token;
//        }
//        else{
//            System.out.println("안 맞음");
//            return null;
//        }

        //  User user2 = userRepository.userinfo(user.getId());
        Optional<User> user2 = userRepository.findById(user.getId());
        BCryptPasswordEncoder hashPwd = new BCryptPasswordEncoder();


        System.out.println("user 패스워드 : " + user.getPwd());
       System.out.println("user2 패스워드 : " + user2.get().getPwd());

        if(hashPwd.matches(user.getPwd(), user2.get().getPwd())){
            String token = tokenProvider.create(user2);
            return token;
        }
        else{
            return null;
        }



    }

    @Override
    public int idCheck(User user) {
       int result;
       result = userRepository.idtest(user.getId());
       return result;
    }

    @Override
    public List<Reservation> mypage(User user) {
        List<Reservation> info = reservationRepository.userinfo(user.getId());


        return info;
    }

    @Override
    public Optional<User> gradeCheck(User user) {
        Optional<User> user1 = userRepository.findById(user.getId());

        return user1;
    }

    @Override
    public User userinfo(User user) {
       Optional<User> user1= userRepository.findById(user.getId());
       if(user1.isPresent()) {
          user1.get().setPwd(null);
          return user1.get();
       }
       return null;
    }
    @Override
    public int countbyidandpwd(String id, String pwd) {
        return userRepository.countByIdAndPwd(id,pwd);
    }

    @Override
    public Optional<User> findById(String id) {
        return userRepository.findById(id);
    }
}
