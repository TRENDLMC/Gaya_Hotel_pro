package com.GaYaHole.Pro.service;

import com.GaYaHole.Pro.entity.Reservation;
import com.GaYaHole.Pro.entity.Review;
import com.GaYaHole.Pro.entity.Room;
import com.GaYaHole.Pro.entity.User;
import com.GaYaHole.Pro.repository.ReservationRepository;
import com.GaYaHole.Pro.repository.ReviewRepository;
import com.GaYaHole.Pro.repository.RoomRepository;
import com.GaYaHole.Pro.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class ReviewServiceImpl implements ReviewService {
    @Autowired
    private ReviewRepository reviewRepository;
    @Autowired
    UserRepository userRepository;
    @Autowired
    RoomRepository roomRepository;
    @Autowired
    ReservationRepository reservationRepository;


    @Override
    public void regreview(Review review) {
//        Optional<User> user = userRepository.findById(review.getId().getId());
//        Optional<Room> room = roomRepository.findById(review.getR_num().getR_num());
//        Optional<Reservation> reservation = reservationRepository.findById(review.getReservation_num().getReservation_num());
//        User user1 = null;
//        if (user.isPresent()) {
//            user1 = user.get();
//        }
//        Room room1 = null;
//        if (room.isPresent()) {
//            room1 = room.get();
//        }
//        Reservation reservation1 = null;
//        if (reservation.isPresent()) {
//            reservation1 = reservation.get();
//        }
//        Review review1 = Review.builder().id(user1).r_num(room1).reservation_num(reservation1).content(review.getContent())
//                .starpoint(review.getStarpoint())
//                .build();
        reviewRepository.save(review);
    }

    @Override
    public void ureview(Review review) {
        reviewRepository.save(review);
    }

    @Override
    public void rdel(int review_num) {
        reviewRepository.deleteById(review_num);
    }

    @Override
    public Optional<Review> rdet(int review_num) {
        Optional<Review> reviewdetail = reviewRepository.findById(review_num);

        return reviewdetail;
    }
}
