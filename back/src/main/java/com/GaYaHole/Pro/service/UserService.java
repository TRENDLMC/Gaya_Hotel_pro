package com.GaYaHole.Pro.service;

import com.GaYaHole.Pro.entity.Reservation;
import com.GaYaHole.Pro.entity.User;

import java.util.List;
import java.util.Optional;

public interface UserService {

    public void join(User user);
    public int login(User user);
    public int idCheck(User user);
    public List<Reservation> mypage (User user);
    public Optional<User> gradeCheck (User user);
}
