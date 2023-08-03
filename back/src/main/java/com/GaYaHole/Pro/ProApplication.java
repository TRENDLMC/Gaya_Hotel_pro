package com.GaYaHole.Pro;

import com.GaYaHole.Pro.entity.Reservation;
import com.GaYaHole.Pro.entity.Room;
import com.GaYaHole.Pro.entity.User;
import com.GaYaHole.Pro.repository.OptionRepository;
import com.GaYaHole.Pro.repository.ReservationRepository;
import com.GaYaHole.Pro.repository.RoomRepository;
import com.GaYaHole.Pro.repository.UserRepository;
import com.sun.jna.platform.unix.X11;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

import java.text.SimpleDateFormat;
import java.util.Date;

@SpringBootApplication
@EnableJpaAuditing
public class ProApplication implements CommandLineRunner {

	@Autowired
	private RoomRepository roomRepository;
	@Autowired
	private UserRepository userRepository;
	@Autowired
	private OptionRepository optionRepository;

	@Autowired
	private ReservationRepository reservationRepository;

	@Override
	public void run(String... args) throws Exception {

		User user1 = new User("test","12345","경기도 안산시 이동","715-3","김테스트","010","1234","1234"
				,"test@test.com",1);
		Room room1 = new Room(101, 2, "디럭스 룸", 160000);

		// 테스트 계정 생성
		userRepository.save(user1);

		String nummb= "2023-08-15";
		SimpleDateFormat sidf=new SimpleDateFormat("yyyy-MM-dd");
		Date date2=sidf.parse(nummb);


		String nummb2= "2023-08-17";
		Date date3=sidf.parse(nummb2);


		//16 개의 방 생성
		roomRepository.save(room1);
		roomRepository.save(new Room(102, 3, "스탠다드 룸", 180000));
		roomRepository.save(new Room(103, 4, "패밀리 룸", 240000));
		roomRepository.save(new Room(104, 2, "스위트 룸", 300000));
		roomRepository.save(new Room(105, 2, "디럭스 룸", 160000));
		roomRepository.save(new Room(106, 3, "스탠다드 룸", 180000));
		roomRepository.save(new Room(107, 4, "패밀리 룸", 240000));
		roomRepository.save(new Room(108, 2, "스위트 룸", 300000));
		roomRepository.save(new Room(109, 2, "디럭스 룸", 160000));
		roomRepository.save(new Room(110, 3, "스탠다드 룸", 180000));
		roomRepository.save(new Room(111, 4, "패밀리 룸", 240000));
		roomRepository.save(new Room(112, 2, "스위트 룸", 300000));
		roomRepository.save(new Room(113, 2, "디럭스 룸", 160000));
		roomRepository.save(new Room(114, 3, "스탠다드 룸", 180000));
		roomRepository.save(new Room(115, 4, "패밀리 룸", 240000));
		roomRepository.save(new Room(116, 2, "스위트 룸", 300000));

//		System.out.println(date3);
//		System.out.println(date2);
		reservationRepository.save(new Reservation(1, 300000, date2,date3, user1,room1, "ABC"));

	}

	public static void main(String[] args) {
		SpringApplication.run(ProApplication.class, args);
	}

}
