package com.supermarkt.admin;

import org.springframework.data.jpa.repository.JpaRepository;

interface ItemRepositorio extends JpaRepository<Item, Long>  {

}
