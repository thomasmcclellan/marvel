import { MarvelService } from "./marvel.service";
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'

describe('MarvelService', () => {
  let mockMarvelService
  let httpTestingController: HttpTestingController
  let service: MarvelService

  beforeEach(() => {
    mockMarvelService = jasmine.createSpyObj(['add'])

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        MarvelService
      ]
    })

    httpTestingController = TestBed.get(HttpTestingController)
    service = TestBed.get(MarvelService)
  })

  describe('getSuper', () => {
    it('should call get with the correct endpoint', () => {
      service.getSuper('spider-man').subscribe()

      // const req = httpTestingController.expectOne()
    })
  })
})