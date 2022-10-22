import React, { useEffect, useState } from 'react'
import Venobox from 'venobox'
import { teamData, filterBtnData as filterData } from '../data/teamData'

export default function Projects() {
  const [teamStateData, setTeamStateData] = useState(teamData)
  const [filterBtnData, setFilterBtnData] = useState(filterData)
  useEffect(() => {
    new Venobox({
      spinner: 'wave',
    })
  }, [])

  const handleFilterBtnClick = (evt) => {
    const buttonLabel = evt.target.dataset.filter
    if (buttonLabel === 'all') {
      setTeamStateData(teamData)
    } else {
      //filter  data
      const selectedItems = teamData.filter(
        (team) => team.category === buttonLabel
      )
      setTeamStateData(selectedItems)
    }

    const filteredActiveBtnStyle = filterBtnData.map((filterBtn) =>
      filterBtn.filterCat === buttonLabel
        ? { ...filterBtn, active: true }
        : { ...filterBtn, active: false }
    )
    setFilterBtnData(filteredActiveBtnStyle)
  }
  return (
    <section name='project' id='project'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-6 col-md-6 col-sm-6 col-6'>
            <div className='project-part-left'>
              <h3>OUR WORKS</h3>
            </div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <div class='btn-group my-2' role='group' aria-label='Basic example'>
              {filterBtnData.map((btn, index) => (
                <button
                  type='button'
                  key={index}
                  onClick={handleFilterBtnClick}
                  data-filter={btn.filterCat}
                  className={
                    btn.active === true
                      ? 'activeFilterBtn btn btn-primary me-2'
                      : 'btn btn-primary me-2'
                  }
                >
                  {btn.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className='container'>
        <div className='row'>
          {teamStateData.map((team, index) => (
            <div key={index} className='col-lg-2 col-md-3 col-sm-6 col-6 p-0'>
              <div className='projet-img'>
                <a
                  className='venobox'
                  data-gall='gallery01'
                  href={team.largeImg}
                >
                  <img
                    src={team.thumbnail}
                    alt='image not found'
                    className='img-fluid'
                  />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className='row'>
          <div className='col-lg-12'>
            <div className='project-btn text-center'>
              <a href='#'>LOAD MORE</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}