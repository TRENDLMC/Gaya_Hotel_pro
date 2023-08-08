package com.GaYaHole.Pro.service;

import com.GaYaHole.Pro.entity.Reservation;
import com.GaYaHole.Pro.entity.User;
import com.GaYaHole.Pro.repository.ReservationRepository;
import com.GaYaHole.Pro.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
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
        userRepository.save(user);
    }

    @Override
    public int login(User user) {
        return userRepository.logintest(user.getId(), user.getPwd());


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
}
