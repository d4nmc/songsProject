package com.natwest.springprojectSongs.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.natwest.springprojectSongs.domain.Songs;
import com.natwest.springprojectSongs.service.SongsService;

@RestController
@RequestMapping("/songs")
public class SongsController {

	private SongsService service;

	@Autowired
	public SongsController(SongsService service) {
		this.service = service;
	}

	@GetMapping("/test")
	public String test() {
		return "Back to testing on Postman";
	}

	@PostMapping("/create")
	public ResponseEntity<Songs> create(@RequestBody Songs ms) {
		return new ResponseEntity<Songs>(this.service.create(ms), HttpStatus.CREATED);

	}

	@GetMapping("/read")
	public ResponseEntity<List<Songs>> read() {

		return new ResponseEntity<List<Songs>>(this.service.read(), HttpStatus.OK);
	}

	@PutMapping("/replace/{id}")
	public ResponseEntity<Songs> update(@PathVariable Long id, @RequestBody Songs ms) {
		return new ResponseEntity<Songs>(this.service.update(id, ms), HttpStatus.ACCEPTED);
	}

	@DeleteMapping("/delete/{id}")
	public ResponseEntity<Boolean> delete(@PathVariable Long id) {
		return new ResponseEntity<Boolean>(this.service.delete(id), HttpStatus.NO_CONTENT);
	}
}