import { Component, ElementRef, Input, OnDestroy, OnInit } from '@angular/core';
import { ModalService } from 'src/app/_services';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit, OnDestroy {
    @Input() id?: string;
    isOpen = false;
    private element: any;

    constructor(private modalService: ModalService, private el: ElementRef) {
        this.element = el.nativeElement;
    }

    ngOnInit() {
        this.modalService.add(this);
        document.body.appendChild(this.element);
        this.element.style.display = 'none';
        this.element.addEventListener('click', (el: any) => {
            if (el.target.className === 'app-modal') {
                this.close();
            }
        });
    }

    ngOnDestroy() {
        this.modalService.remove(this);
        this.element.remove();
    }

    open() {
        this.element.style.display = 'block';
        console.log(this.element)
        this.element.classList.add('app-modal-open');
        this.isOpen = true;
    }

    close() {
        this.element.style.display = 'none';
        this.element.classList.remove('app-modal-open');
        this.isOpen = false;
    }
}
