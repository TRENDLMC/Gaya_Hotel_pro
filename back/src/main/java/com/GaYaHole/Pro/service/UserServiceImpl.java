package com.GaYaHole.Pro.service;

import com.GaYaHole.Pro.entity.Option;
import com.GaYaHole.Pro.entity.Reservation;
import com.GaYaHole.Pro.entity.User;
import com.GaYaHole.Pro.repository.ReservationRepository;
import com.GaYaHole.Pro.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.factory.PasswordEncoderFactories;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserServiceImpl implements UserService{


    @Autowired
    UserRepository userRepository;

    @Autowired
    ReservationRepository reservationRepository;

    @Override
    public void join(User user) {

        BCryptPasswordEncoder changePwd = new BCryptPasswordEncoder();
        user.setPwd(changePwd.encode(user.getPwd()));

        userRepository.save(user);
    }

    @Override
    public int login(User user) {

      //  User user2 = userRepository.userinfo(user.getId());
        Optional<User> user2 = userRepository.findById(user.getId());
        BCryptPasswordEncoder hashPwd = new BCryptPasswordEncoder();
        if(hashPwd.matches(user2.get().getPwd(), user.getPwd())){
                System.out.println("맞음");
            return userRepository.logintest(user.getId(), user2.get().getPwd());
        }
        else{
            System.out.println("안 맞음");
            return userRepository.logintest(user.getId(), user2.get().getPwd());
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
