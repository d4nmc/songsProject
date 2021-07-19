package com.natwest.springprojectSongs.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.natwest.springprojectSongs.domain.Songs;
import com.natwest.springprojectSongs.repo.SongsRepo;


@Service
public class SongsService {

	private SongsRepo repo;

	@Autowired
	
	public SongsService(SongsRepo repo) {
		this.repo = repo;
	}
	
	public Songs create(Songs sg) {
		return this.repo.saveAndFlush(sg);
	}
	
	public List<Songs> read() {
		return this.repo.findAll();
	}
	
	public Songs update(Long id, Songs newSg){
		Songs existing = this.repo.getById(id);
		existing.setSongName(newSg.getSongGenre());
		existing.setArtistName(newSg.getArtistName());
		existing.setYearReleased(newSg.getYearReleased());
		existing.setSongGenre(newSg.getSongGenre());
		existing.setSongLength(newSg.getSongLength());
		existing.setGotBass(newSg.isGotBass());
		
		Songs updated = this.repo.save(existing);
		return updated;
	}
	
	public boolean delete(Long id) {
		this.repo.deleteById(id);
		return this.repo.existsById(id);
	}
} 	