package com.GaYaHole.Pro.service;


import com.GaYaHole.Pro.entity.Accounting;
import com.GaYaHole.Pro.entity.Reservation;
import com.GaYaHole.Pro.entity.Room;
import com.GaYaHole.Pro.entity.User;
import com.GaYaHole.Pro.repository.AccountRepository;
import com.GaYaHole.Pro.repository.ReservationRepository;
import com.GaYaHole.Pro.repository.RoomRepository;
import com.GaYaHole.Pro.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ReservationServiceImpl implements ReservationService{

    @Autowired
    ReservationRepository reservationRepository;

    @Autowired
    RoomRepository roomRepository;

    @Autowired
    UserRepository userRepository;

    @Autowired
    AccountRepository accountRepository;

    @Override
    public List<Room> dateCheck(Reservation reservation) {
        List<Room> ableRoomList = roomRepository.dateCal(reservation.getCheck_in(), reservation.getCheck_out());
        return ableRoomList;
    }

    @Override
    public void Reservation(Reservation reservation) {
        User user; Room room;
        user = reservation.getId();
        Optional<User> user1=userRepository.findById(user.getId());
        room = roomRepository.roominfo(reservation.getR_num().getR_num());
        user=user1.get();

        reservation = Reservation.builder()
                .option_code(reservation.getOption_code())
                .check_in(reservation.getCheck_in())
                .check_out(reservation.getCheck_out())
                .total_price(reservation.getTotal_price())
                .r_num(room)
                .id(user)
                .build();

        reservationRepository.save(reservation);

        Accounting accounting = Accounting.builder()
                .pay_number(reservation.getReservation_num())
                .price(reservation.getTotal_price())
                .id(user)
                .reservation_num(reservation)
                .build();

        accountRepository.save(accounting);

    }
}
