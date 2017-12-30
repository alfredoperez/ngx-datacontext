// import { async, ComponentFixture, inject, TestBed } from '@angular/core/testing';
// import { Observable } from 'rxjs/Observable';
// import { AngularFireDatabase } from 'angularfire2/database';
// import { FirebaseRepository } from './firebase-repository.service';
// import { Attribute, BaseEntity, Entity, FirebaseEntity } from '../index';

// @Entity('user')
// class User extends FirebaseEntity {
//     @Attribute({ serializedName: 'firstName' })
//     name: string;

//     @Attribute() lastName: string;

//     middleName: string;
// }

// describe('Firebase Repository Service', () => {
//     const tagList: Array<string> = [
//         'C++', 'Swift', 'Ionic', 'Azure', 'AWS'];
//     const fixtureTodos = [
//         { 'text': 'Get milk' },
//         { 'text': 'Take out the trash' },
//         { 'text': 'Get gas for the car' },
//         { 'text': 'Pay parking ticket' },
//         { 'text': 'Pick up dry cleaning' },
//     ];
//     const angularFireDatabaseStub = { list: () => { } };
//     const mockTodos$ = Observable.of(fixtureTodos);

//     beforeEach(() => TestBed.configureTestingModule({
//         providers: [
//             { provide: AngularFireDatabase, useValue: angularFireDatabaseStub },
//             { provide: FirebaseRepository, useClass: FirebaseRepository }
//         ]
//     }));

//     it('Call getAll returns Observable of Firebase Entity Collection',
//         inject([FirebaseRepository], (service: FirebaseRepository<User>) => {
//             service.getAll()
//                 .subscribe(users => {
//                     expect(users.length).toEqual(tagList.length);
//                     expect(users[0]).toEqual(tagList[0]);
//                 });

//         }

//         );
// });
