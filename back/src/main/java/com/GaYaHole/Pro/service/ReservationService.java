package com.GaYaHole.Pro.service;

import com.GaYaHole.Pro.entity.Reservation;
import com.GaYaHole.Pro.entity.Room;

import java.util.List;

public interface ReservationService {

    public List<Room> dateCheck(Reservation reservation);
    public void Reservation (Reservation reservation);
}
