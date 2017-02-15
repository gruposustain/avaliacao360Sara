package com.ibm.avaliacao.repository;

import com.ibm.avaliacao.domain.Team;

import org.springframework.data.jpa.repository.*;
import org.springframework.data.repository.query.Param;

import java.util.List;

/**
 * Spring Data JPA repository for the Team entity.
 */
@SuppressWarnings("unused")
public interface TeamRepository extends JpaRepository<Team,Long> {

    @Query("select team from Team team where team.lider.login = ?#{principal.username}")
    List<Team> findByLiderIsCurrentUser();

    @Query("select distinct team from Team team left join fetch team.membros")
    List<Team> findAllWithEagerRelationships();

    @Query("select team from Team team left join fetch team.membros where team.id =:id")
    Team findOneWithEagerRelationships(@Param("id") Long id);

}
