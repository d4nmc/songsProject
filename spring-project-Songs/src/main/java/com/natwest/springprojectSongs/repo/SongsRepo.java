package com.natwest.springprojectSongs.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.natwest.springprojectSongs.domain.Songs;

@Repository
public interface SongsRepo extends JpaRepository<Songs, Long> {

	
	
}
