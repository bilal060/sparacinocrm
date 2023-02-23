
import React from 'react'

export default function Email() {
  return (
    <div>
    <div class="tab-content" id="pills-tabContent">
    <div class="tab-pane fade in active" id="email-pill" role="tabpanel" aria-labelledby="email-pill-tab">
    <div class="email d-flex">
    <section class="email-sidebar">
                    <button class="compose-btn">
                        Compose
                    </button>
                    <div class="mt-4">
                        <a class="email-sidebar-item">
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="15" viewBox="0 0 14 15" fill="none">
                                <path
                                    d="M1.5 14.9756C1.09733 14.9756 0.746667 14.8263 0.448 14.5276C0.149333 14.2289 0 13.8783 0 13.4756V2.47559C0 2.05892 0.149333 1.70492 0.448 1.41359C0.746667 1.12159 1.09733 0.975586 1.5 0.975586H12.5C12.9167 0.975586 13.2707 1.12159 13.562 1.41359C13.854 1.70492 14 2.05892 14 2.47559V13.4756C14 13.8783 13.854 14.2289 13.562 14.5276C13.2707 14.8263 12.9167 14.9756 12.5 14.9756H1.5ZM7 10.9756C7.55533 10.9756 8.02767 10.7813 8.417 10.3926C8.80567 10.0033 9 9.53092 9 8.97559H12.5V2.47559H1.5V8.97559H5C5 9.53092 5.19433 10.0033 5.583 10.3926C5.97233 10.7813 6.44467 10.9756 7 10.9756Z"
                                    fill="#24272B" />
                            </svg> Inbox
                        </a>
                        <div class="email-sidebar-item">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M5.333 12.8716L8 11.2876L10.688 12.8716L9.979 9.87159L12.292 7.89259L9.229 7.62159L8 4.76759L6.771 7.62159L3.708 7.89259L6.042 9.87159L5.333 12.8716ZM3.062 15.9756L4.375 10.4336L0 6.70459L5.75 6.20459L8 0.975586L10.25 6.22559L16 6.70459L11.625 10.4336L12.938 15.9756L8 13.0376L3.062 15.9756Z"
                                    fill="#24272B" />
                            </svg>
                            Starred
                        </div>
                        <div class="email-sidebar-item">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                                <path
                                    d="M10.792 12.5176L11.854 11.4546L8.75 8.35059V3.97559H7.25V8.97559L10.792 12.5176ZM8 16.9756C6.90267 16.9756 5.868 16.7673 4.896 16.3506C3.924 15.9339 3.07333 15.3609 2.344 14.6316C1.61467 13.9023 1.04167 13.0516 0.625 12.0796C0.208333 11.1076 0 10.0729 0 8.97559C0 7.86425 0.208333 6.82259 0.625 5.85059C1.04167 4.87859 1.61467 4.03125 2.344 3.30859C3.07333 2.58659 3.924 2.01725 4.896 1.60059C5.868 1.18392 6.90267 0.975586 8 0.975586C9.11133 0.975586 10.153 1.18392 11.125 1.60059C12.097 2.01725 12.9443 2.58659 13.667 3.30859C14.389 4.03125 14.9583 4.87859 15.375 5.85059C15.7917 6.82259 16 7.86425 16 8.97559C16 10.0729 15.7917 11.1076 15.375 12.0796C14.9583 13.0516 14.389 13.9023 13.667 14.6316C12.9443 15.3609 12.097 15.9339 11.125 16.3506C10.153 16.7673 9.11133 16.9756 8 16.9756ZM8 15.4756C9.80533 15.4756 11.34 14.8403 12.604 13.5696C13.868 12.2989 14.5 10.7676 14.5 8.97559C14.5 7.17025 13.868 5.63559 12.604 4.37159C11.34 3.10759 9.80533 2.47559 8 2.47559C6.208 2.47559 4.67667 3.10759 3.406 4.37159C2.13533 5.63559 1.5 7.17025 1.5 8.97559C1.5 10.7676 2.13533 12.2989 3.406 13.5696C4.67667 14.8403 6.208 15.4756 8 15.4756Z"
                                    fill="#24272B" />
                            </svg>
                            Snoozed
                        </div>
                        <div class="email-sidebar-item">
                            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="11" viewBox="0 0 13 11" fill="none">
                                <path
                                    d="M0 10.9756L4 5.97559L0 0.975586H8.521C8.67367 0.975586 8.816 1.01025 8.948 1.07959C9.08 1.14892 9.19467 1.23925 9.292 1.35059L13 5.97559L9.292 10.6006C9.19467 10.7119 9.08 10.8023 8.948 10.8716C8.816 10.9409 8.67367 10.9756 8.521 10.9756H0ZM3.125 9.47559H8.271L11.083 5.97559L8.271 2.47559H3.125L5.917 5.97559L3.125 9.47559ZM5.917 5.97559L3.125 2.47559L5.917 5.97559L3.125 9.47559L5.917 5.97559Z"
                                    fill="#24272B" />
                            </svg>
                            Important
                        </div>
                        <div class="email-sidebar-item">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                <path
                                    d="M4.00097 10.6426H10.709V8.89258H4.00097V10.6426ZM4.00097 8.18358H14.001V6.43358H4.00097V8.18358ZM4.00097 5.72558H14.001V3.97558H4.00097V5.72558ZM0.667969 17.3086V2.39258C0.667969 1.90658 0.837969 1.49324 1.17797 1.15258C1.51864 0.812578 1.93197 0.642578 2.41797 0.642578H15.584C16.07 0.642578 16.4833 0.812578 16.824 1.15258C17.164 1.49324 17.334 1.90658 17.334 2.39258V12.2256C17.334 12.7116 17.164 13.1249 16.824 13.4656C16.4833 13.8056 16.07 13.9756 15.584 13.9756H4.00097L0.667969 17.3086ZM2.41797 13.0796L3.27197 12.2256H15.584V2.39258H2.41797V13.0796ZM2.41797 2.39258V13.0796V2.39258Z"
                                    fill="#24272B" />
                            </svg>
                            Chats
                        </div>
                        <div class="email-sidebar-item">
                            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="13" viewBox="0 0 15 13" fill="none">
                                <path
                                    d="M0 12.9756V0.975586L15 6.97559L0 12.9756ZM1.5 10.7466L10.958 6.97559L1.5 3.20459V5.47559L6 6.97559L1.5 8.47559V10.7466ZM1.5 10.7466V3.20459V8.47559V10.7466Z"
                                    fill="#24272B" />
                            </svg>
                            Sent
                        </div>
                        <div class="email-sidebar-item">
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="17" viewBox="0 0 12 17" fill="none">
                                <path
                                    d="M1.5 16.9756C1.08333 16.9756 0.729334 16.8296 0.438 16.5376C0.146 16.2463 0 15.8923 0 15.4756V2.47559C0 2.05892 0.146 1.70492 0.438 1.41359C0.729334 1.12159 1.08333 0.975586 1.5 0.975586H8L12 4.97559V15.4756C12 15.8923 11.854 16.2463 11.562 16.5376C11.2707 16.8296 10.9167 16.9756 10.5 16.9756H1.5ZM7 5.97559V2.47559H1.5V15.4756H10.5V5.97559H7ZM1.5 2.47559V6.41359V2.47559V15.4756V2.47559Z"
                                    fill="#24272B" />
                            </svg>
                            Drafts
                        </div>
                        <div class="email-sidebar-item">
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="15" viewBox="0 0 14 15" fill="none">
                                <path
                                    d="M7 11.7256C7.208 11.7256 7.385 11.6526 7.531 11.5066C7.677 11.3606 7.75 11.1836 7.75 10.9756C7.75 10.7676 7.677 10.5906 7.531 10.4446C7.385 10.2986 7.208 10.2256 7 10.2256C6.792 10.2256 6.615 10.2986 6.469 10.4446C6.323 10.5906 6.25 10.7676 6.25 10.9756C6.25 11.1836 6.323 11.3606 6.469 11.5066C6.615 11.6526 6.792 11.7256 7 11.7256ZM6.25 8.97559H7.75V3.97559H6.25V8.97559ZM4.104 14.9756L0 10.8506V5.07959L4.104 0.975586H9.896L14 5.07959V10.8716L9.875 14.9756H4.104ZM4.729 13.4756H9.271L12.5 10.2466V5.70459L9.25 2.47559H4.729L1.5 5.70459V10.2466L4.729 13.4756Z"
                                    fill="#24272B" />
                            </svg>
                            Spam
                        </div>
                        <div class="email-sidebar-item">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="13" viewBox="0 0 16 13" fill="none">
                                <path
                                    d="M1.5 12.9756C1.08333 12.9756 0.729333 12.8296 0.438 12.5376C0.146 12.2463 0 11.8923 0 11.4756V2.47559C0 2.05892 0.146 1.70492 0.438 1.41359C0.729333 1.12159 1.08333 0.975586 1.5 0.975586H14.5C14.9167 0.975586 15.2707 1.12159 15.562 1.41359C15.854 1.70492 16 2.05892 16 2.47559V11.4756C16 11.8923 15.854 12.2463 15.562 12.5376C15.2707 12.8296 14.9167 12.9756 14.5 12.9756H1.5ZM8 7.97559L1.5 4.24659V11.4756H14.5V4.24659L8 7.97559ZM8 6.20459L14.5 2.47559H1.5L8 6.20459ZM1.5 4.24659V2.47559V11.4756V4.24659Z"
                                    fill="#24272B" />
                            </svg>
                            All Mail
                        </div>
                        <div class="email-sidebar-item">
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="15" viewBox="0 0 12 15" fill="none">
                                <path
                                    d="M2.5 14.9756C2.08333 14.9756 1.72933 14.8296 1.438 14.5376C1.146 14.2463 1 13.8923 1 13.4756V3.47559H0V1.97559H4V0.975586H8V1.97559H12V3.47559H11V13.4756C11 13.8923 10.854 14.2463 10.562 14.5376C10.2707 14.8296 9.91667 14.9756 9.5 14.9756H2.5ZM9.5 3.47559H2.5V13.4756H9.5V3.47559ZM4 11.9756H5.5V4.97559H4V11.9756ZM6.5 11.9756H8V4.97559H6.5V11.9756ZM2.5 3.47559V13.4756V3.47559Z"
                                    fill="#24272B" />
                            </svg>
                            Bin
                        </div>
                        <div class="email-sidebar-item">
                            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="8" viewBox="0 0 10 8" fill="none">
                                <path d="M5 7.03759L0 2.03759L1.062 0.975586L5 4.91359L8.938 0.975586L10 2.03759L5 7.03759Z"
                                    fill="#24272B" />
                            </svg>
                            More
                        </div>
                    </div>
     </section>
     <section class="email-content">
                    <div class="email-search-bar d-flex justify-content-between align-items-center">
    
                        <div class="d-flex  align-items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="19" viewBox="0 0 18 19" fill="none">
                                <path
                                    d="M16.6 18.9756L10.3 12.6756C9.8 13.0756 9.225 13.3923 8.575 13.6256C7.925 13.8589 7.23333 13.9756 6.5 13.9756C4.68333 13.9756 3.146 13.3466 1.888 12.0886C0.629333 10.8299 0 9.29225 0 7.47559C0 5.65892 0.629333 4.12125 1.888 2.86259C3.146 1.60459 4.68333 0.975586 6.5 0.975586C8.31667 0.975586 9.85433 1.60459 11.113 2.86259C12.371 4.12125 13 5.65892 13 7.47559C13 8.20892 12.8833 8.90059 12.65 9.55059C12.4167 10.2006 12.1 10.7756 11.7 11.2756L18 17.5756L16.6 18.9756ZM6.5 11.9756C7.75 11.9756 8.81267 11.5383 9.688 10.6636C10.5627 9.78825 11 8.72559 11 7.47559C11 6.22559 10.5627 5.16292 9.688 4.28759C8.81267 3.41292 7.75 2.97559 6.5 2.97559C5.25 2.97559 4.18733 3.41292 3.312 4.28759C2.43733 5.16292 2 6.22559 2 7.47559C2 8.72559 2.43733 9.78825 3.312 10.6636C4.18733 11.5383 5.25 11.9756 6.5 11.9756Z"
                                    fill="#24272B" />
                            </svg>
                            <input type="text" placeholder="Search Mail"/>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="19" viewBox="0 0 18 19" fill="none">
                            <path
                                d="M8 18.9756V12.9756H10V14.9756H18V16.9756H10V18.9756H8ZM0 16.9756V14.9756H6V16.9756H0ZM4 12.9756V10.9756H0V8.97559H4V6.97559H6V12.9756H4ZM8 10.9756V8.97559H18V10.9756H8ZM12 6.97559V0.975586H14V2.97559H18V4.97559H14V6.97559H12ZM0 4.97559V2.97559H10V4.97559H0Z"
                                fill="#47505E" />
                        </svg>
                    </div>
    
                    <div class="email-content-detail">
                        <div class="email-content-detail-menu d-flex align-items-center justify-content-between">
                            <div class="d-flex align-items-center ">
                                {/* </button> */}
                                <button>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14"
                                        fill="none">
                                        <path
                                            d="M13.6673 6.14193H3.52565L8.18398 1.48359L7.00065 0.308594L0.333984 6.97526L7.00065 13.6419L8.17565 12.4669L3.52565 7.80859H13.6673V6.14193Z"
                                            fill="#24272B" />
                                    </svg>
                                </button>
                                <button>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="15" viewBox="0 0 14 15"
                                        fill="none">
                                        <path
                                            d="M1.5 14.9756C1.08333 14.9756 0.729333 14.8296 0.438 14.5376C0.146 14.2463 0 13.8923 0 13.4756V3.60059C0 3.40592 0.0383333 3.21492 0.115 3.02759C0.191 2.84025 0.298667 2.67692 0.438 2.53759L1.562 1.41359C1.70133 1.27425 1.86467 1.16659 2.052 1.09059C2.23933 1.01392 2.43033 0.975586 2.625 0.975586H11.375C11.5697 0.975586 11.7607 1.01392 11.948 1.09059C12.1353 1.16659 12.2987 1.27425 12.438 1.41359L13.562 2.53759C13.7013 2.67692 13.809 2.84025 13.885 3.02759C13.9617 3.21492 14 3.40592 14 3.60059V13.4756C14 13.8923 13.854 14.2463 13.562 14.5376C13.2707 14.8296 12.9167 14.9756 12.5 14.9756H1.5ZM1.625 3.47559H12.375L11.375 2.47559H2.625L1.625 3.47559ZM1.5 4.97559V13.4756H12.5V4.97559H1.5ZM7 12.2256L10 9.22559L8.938 8.16359L7.75 9.35059V6.22559H6.25V9.35059L5.062 8.16359L4 9.22559L7 12.2256ZM1.5 13.4756H12.5H1.5Z"
                                            fill="#24272B" />
                                    </svg>
                                </button>
                                <button>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="15" viewBox="0 0 14 15"
                                        fill="none">
                                        <path
                                            d="M7 11.7256C7.208 11.7256 7.385 11.6526 7.531 11.5066C7.677 11.3606 7.75 11.1836 7.75 10.9756C7.75 10.7676 7.677 10.5906 7.531 10.4446C7.385 10.2986 7.208 10.2256 7 10.2256C6.792 10.2256 6.615 10.2986 6.469 10.4446C6.323 10.5906 6.25 10.7676 6.25 10.9756C6.25 11.1836 6.323 11.3606 6.469 11.5066C6.615 11.6526 6.792 11.7256 7 11.7256ZM6.25 8.97559H7.75V3.97559H6.25V8.97559ZM4.104 14.9756L0 10.8506V5.07959L4.104 0.975586H9.896L14 5.07959V10.8716L9.875 14.9756H4.104ZM4.729 13.4756H9.271L12.5 10.2466V5.70459L9.25 2.47559H4.729L1.5 5.70459V10.2466L4.729 13.4756Z"
                                            fill="#24272B" />
                                    </svg>
                                </button>
                                <button>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="15" viewBox="0 0 12 15"
                                        fill="none">
                                        <path
                                            d="M2.5 14.9756C2.08333 14.9756 1.72933 14.8296 1.438 14.5376C1.146 14.2463 1 13.8923 1 13.4756V3.47559H0V1.97559H4V0.975586H8V1.97559H12V3.47559H11V13.4756C11 13.8923 10.854 14.2463 10.562 14.5376C10.2707 14.8296 9.91667 14.9756 9.5 14.9756H2.5ZM9.5 3.47559H2.5V13.4756H9.5V3.47559ZM4 11.9756H5.5V4.97559H4V11.9756ZM6.5 11.9756H8V4.97559H6.5V11.9756ZM2.5 3.47559V13.4756V3.47559Z"
                                            fill="#24272B" />
                                    </svg>
                                </button>
                                <button>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="13" viewBox="0 0 16 13"
                                        fill="none">
                                        <path
                                            d="M1.5 12.9756C1.08333 12.9756 0.729333 12.8296 0.438 12.5376C0.146 12.2463 0 11.8923 0 11.4756V2.47559C0 2.05892 0.146 1.70492 0.438 1.41359C0.729333 1.12159 1.08333 0.975586 1.5 0.975586H14.5C14.9167 0.975586 15.2707 1.12159 15.562 1.41359C15.854 1.70492 16 2.05892 16 2.47559V11.4756C16 11.8923 15.854 12.2463 15.562 12.5376C15.2707 12.8296 14.9167 12.9756 14.5 12.9756H1.5ZM8 7.97559L1.5 4.24659V11.4756H14.5V4.24659L8 7.97559ZM8 6.20459L14.5 2.47559H1.5L8 6.20459ZM1.5 4.24659V2.47559V11.4756V4.24659Z"
                                            fill="#24272B" />
                                    </svg>
                                </button>
                                <button>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17"
                                        fill="none">
                                        <path
                                            d="M10.792 12.5176L11.854 11.4546L8.75 8.35059V3.97559H7.25V8.97559L10.792 12.5176ZM8 16.9756C6.90267 16.9756 5.868 16.7673 4.896 16.3506C3.924 15.9339 3.07333 15.3609 2.344 14.6316C1.61467 13.9023 1.04167 13.0516 0.625 12.0796C0.208333 11.1076 0 10.0729 0 8.97559C0 7.86425 0.208333 6.82259 0.625 5.85059C1.04167 4.87859 1.61467 4.03125 2.344 3.30859C3.07333 2.58659 3.924 2.01725 4.896 1.60059C5.868 1.18392 6.90267 0.975586 8 0.975586C9.11133 0.975586 10.153 1.18392 11.125 1.60059C12.097 2.01725 12.9443 2.58659 13.667 3.30859C14.389 4.03125 14.9583 4.87859 15.375 5.85059C15.7917 6.82259 16 7.86425 16 8.97559C16 10.0729 15.7917 11.1076 15.375 12.0796C14.9583 13.0516 14.389 13.9023 13.667 14.6316C12.9443 15.3609 12.097 15.9339 11.125 16.3506C10.153 16.7673 9.11133 16.9756 8 16.9756ZM8 15.4756C9.80533 15.4756 11.34 14.8403 12.604 13.5696C13.868 12.2989 14.5 10.7676 14.5 8.97559C14.5 7.17025 13.868 5.63559 12.604 4.37159C11.34 3.10759 9.80533 2.47559 8 2.47559C6.208 2.47559 4.67667 3.10759 3.406 4.37159C2.13533 5.63559 1.5 7.17025 1.5 8.97559C1.5 10.7676 2.13533 12.2989 3.406 13.5696C4.67667 14.8403 6.208 15.4756 8 15.4756Z"
                                            fill="#24272B" />
                                    </svg>
                                </button>
                                <button>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="17" viewBox="0 0 18 17"
                                        fill="none">
                                        <path
                                            d="M8 16.9756C6.90267 16.9756 5.868 16.7673 4.896 16.3506C3.924 15.9339 3.07333 15.3609 2.344 14.6316C1.61467 13.9023 1.04167 13.0516 0.625 12.0796C0.208333 11.1076 0 10.0729 0 8.97559C0 7.86425 0.208333 6.82592 0.625 5.86059C1.04167 4.89592 1.61467 4.04892 2.344 3.31959C3.07333 2.59025 3.924 2.01725 4.896 1.60059C5.868 1.18392 6.90267 0.975586 8 0.975586C8.87467 0.975586 9.708 1.10759 10.5 1.37159C11.292 1.63559 12.0213 2.01059 12.688 2.49659L11.604 3.57959C11.09 3.21825 10.5277 2.94392 9.917 2.75659C9.30567 2.56925 8.66667 2.47559 8 2.47559C6.19467 2.47559 4.66 3.10759 3.396 4.37159C2.132 5.63559 1.5 7.17025 1.5 8.97559C1.5 10.7809 2.132 12.3156 3.396 13.5796C4.66 14.8436 6.19467 15.4756 8 15.4756C8.514 15.4756 9.01067 15.4199 9.49 15.3086C9.96867 15.1979 10.4233 15.0383 10.854 14.8296L11.958 15.9336C11.3747 16.2669 10.7497 16.5239 10.083 16.7046C9.41633 16.8853 8.722 16.9756 8 16.9756ZM13.5 15.4756V12.9756H11V11.4756H13.5V8.97559H15V11.4756H17.5V12.9756H15V15.4756H13.5ZM6.854 12.5796L3.5 9.22559L4.583 8.14259L6.875 10.4336L14.938 2.37159L16 3.43359L6.854 12.5796Z"
                                            fill="#24272B" />
                                    </svg>
                                </button>
                                <button>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="14" viewBox="0 0 18 14"
                                        fill="none">
                                        <path
                                            d="M8.91797 11.2256L12.334 7.80859L8.91797 4.39259L7.68897 5.62159L9.00097 6.93359H5.66797V8.68359H9.00097L7.68897 9.99659L8.91797 11.2256ZM2.41797 13.6426C1.93197 13.6426 1.51864 13.4723 1.17797 13.1316C0.837969 12.7916 0.667969 12.3786 0.667969 11.8926V2.05859C0.667969 1.57259 0.837969 1.15959 1.17797 0.819594C1.51864 0.478927 1.93197 0.308594 2.41797 0.308594H7.25097L9.00097 2.05859H15.584C16.07 2.05859 16.4833 2.22893 16.824 2.56959C17.164 2.90959 17.334 3.32259 17.334 3.80859V11.8926C17.334 12.3786 17.164 12.7916 16.824 13.1316C16.4833 13.4723 16.07 13.6426 15.584 13.6426H2.41797ZM2.41797 3.80859V11.8926H15.584V3.80859H8.27197H6.52197H2.41797Z"
                                            fill="#24272B" />
                                    </svg>
                                </button>
                                <button>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="11" viewBox="0 0 13 11"
                                        fill="none">
                                        <path
                                            d="M13 5.97559L9.458 10.4136C9.30533 10.5936 9.12833 10.7323 8.927 10.8296C8.72567 10.9269 8.507 10.9756 8.271 10.9756H1.5C1.08333 10.9756 0.729334 10.8296 0.438 10.5376C0.146 10.2463 0 9.89225 0 9.47559V2.47559C0 2.05892 0.146 1.70492 0.438 1.41359C0.729334 1.12159 1.08333 0.975586 1.5 0.975586H8.271C8.507 0.975586 8.72567 1.02425 8.927 1.12159C9.12833 1.21892 9.30533 1.35759 9.458 1.53759L13 5.97559ZM11.083 5.97559L8.271 2.47559H1.5V9.47559H8.271L11.083 5.97559ZM1.5 5.97559V9.47559V2.47559V5.97559Z"
                                            fill="#24272B" />
                                    </svg>
                                </button>
                                <button>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="4" height="13" viewBox="0 0 4 13"
                                        fill="none">
                                        <path
                                            d="M2 12.9756C1.58333 12.9756 1.22933 12.8296 0.938 12.5376C0.646 12.2463 0.5 11.8923 0.5 11.4756C0.5 11.0589 0.646 10.7049 0.938 10.4136C1.22933 10.1216 1.58333 9.97559 2 9.97559C2.41667 9.97559 2.77067 10.1216 3.062 10.4136C3.354 10.7049 3.5 11.0589 3.5 11.4756C3.5 11.8923 3.354 12.2463 3.062 12.5376C2.77067 12.8296 2.41667 12.9756 2 12.9756ZM2 8.47559C1.58333 8.47559 1.22933 8.32959 0.938 8.03759C0.646 7.74625 0.5 7.39225 0.5 6.97559C0.5 6.55892 0.646 6.20492 0.938 5.91359C1.22933 5.62159 1.58333 5.47559 2 5.47559C2.41667 5.47559 2.77067 5.62159 3.062 5.91359C3.354 6.20492 3.5 6.55892 3.5 6.97559C3.5 7.39225 3.354 7.74625 3.062 8.03759C2.77067 8.32959 2.41667 8.47559 2 8.47559ZM2 3.97559C1.58333 3.97559 1.22933 3.82959 0.938 3.53759C0.646 3.24625 0.5 2.89225 0.5 2.47559C0.5 2.05892 0.646 1.70492 0.938 1.41359C1.22933 1.12159 1.58333 0.975586 2 0.975586C2.41667 0.975586 2.77067 1.12159 3.062 1.41359C3.354 1.70492 3.5 2.05892 3.5 2.47559C3.5 2.89225 3.354 3.24625 3.062 3.53759C2.77067 3.82959 2.41667 3.97559 2 3.97559Z"
                                            fill="#24272B" />
                                    </svg>
                                </button>
                            </div>
                            <div class="d-flex align-items-center ">
                                <button>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="7" height="11" viewBox="0 0 7 11"
                                        fill="none">
                                        <path
                                            d="M5 10.9756L0 5.97559L5 0.975586L6.062 2.03759L2.125 5.97559L6.062 9.91359L5 10.9756Z"
                                            fill="#B8B8B8" />
                                    </svg>
                                </button>
                                <button>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="7" height="11" viewBox="0 0 7 11"
                                        fill="none">
                                        <path
                                            d="M1.9995 10.9756L0.9375 9.91359L4.8745 5.97559L0.9375 2.03759L1.9995 0.975586L6.9995 5.97559L1.9995 10.9756Z"
                                            fill="#B8B8B8" />
                                    </svg>
                                </button>
                                <button>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="14" viewBox="0 0 16 14"
                                        fill="none">
                                        <path d="M9 1.97559H1V6.97559M9 12.9756H1V6.97559M1 6.97559H7.11765"
                                            stroke="#24272B" stroke-width="2" />
                                        <path
                                            d="M11 13.9759C11 13.9759 11 10.7526 11 8.97598C11 7.19941 14.9999 7.19939 14.9999 8.976C14.9999 10.7526 15 13.9759 15 13.9759"
                                            stroke="#24272B" stroke-width="2" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="8" height="5" viewBox="0 0 8 5"
                                        fill="none">
                                        <path d="M4 4.97559L0 0.975586H8L4 4.97559Z" fill="#24272B" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div class="email-content-detail-header">
                            <div class="d-flex justify-content-between align-items-center">
                                <h2>Subject title</h2>
                                <div class="d-flex">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="16" viewBox="0 0 18 16"
                                        fill="none">
                                        <path
                                            d="M12.251 4.68359V2.22559H5.75097V4.68359H4.00097V0.475586H14.001V4.68359H12.251ZM2.41797 6.43359H15.584H4.16797H2.41797ZM14.001 8.62159C14.237 8.62159 14.442 8.53459 14.616 8.36059C14.7893 8.18725 14.876 7.98259 14.876 7.74659C14.876 7.51059 14.7893 7.30559 14.616 7.13159C14.442 6.95825 14.237 6.87159 14.001 6.87159C13.765 6.87159 13.56 6.95825 13.386 7.13159C13.2126 7.30559 13.126 7.51059 13.126 7.74659C13.126 7.98259 13.2126 8.18725 13.386 8.36059C13.56 8.53459 13.765 8.62159 14.001 8.62159ZM12.251 13.7256V10.8086H5.75097V13.7256H12.251ZM14.001 15.4756H4.00097V12.4136H0.667969V7.24659C0.667969 6.53792 0.917969 5.93359 1.41797 5.43359C1.91797 4.93359 2.52197 4.68359 3.22997 4.68359H14.772C15.48 4.68359 16.084 4.93359 16.584 5.43359C17.084 5.93359 17.334 6.53792 17.334 7.24659V12.4136H14.001V15.4756ZM15.584 10.6636V7.32959C15.584 7.07959 15.5113 6.86792 15.366 6.69459C15.22 6.52059 15.022 6.43359 14.772 6.43359H3.31297C3.06364 6.43359 2.85197 6.52059 2.67797 6.69459C2.50464 6.86792 2.41797 7.07959 2.41797 7.32959V10.6636H4.00097V9.05859H14.001V10.6636H15.584Z"
                                            fill="#24272B" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="15" class="ml-4"
                                        viewBox="0 0 14 15" fill="none">
                                        <path
                                            d="M1.5 14.9756C1.08333 14.9756 0.729333 14.8296 0.438 14.5376C0.146 14.2463 0 13.8923 0 13.4756V2.47559C0 2.05892 0.146 1.70492 0.438 1.41359C0.729333 1.12159 1.08333 0.975586 1.5 0.975586H7V2.47559H1.5V13.4756H12.5V7.97559H14V13.4756C14 13.8923 13.854 14.2463 13.562 14.5376C13.2707 14.8296 12.9167 14.9756 12.5 14.9756H1.5ZM5.062 10.9756L4 9.91359L11.438 2.47559H9V0.975586H14V5.97559H12.5V3.53759L5.062 10.9756Z"
                                            fill="#24272B" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div class="d-flex align-items-center mt-4">
                            <div class="user-image">
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="41" viewBox="0 0 40 41"
                                    fill="none">
                                    <g clip-path="url(#clip0_3271_11845)">
                                        <rect y="0.975586" width="40" height="40" fill="#D1D3D9" />
                                        <path
                                            d="M20 8.97559C21.8565 8.97559 23.637 9.73942 24.9497 11.0991C26.2625 12.4587 27 14.3028 27 16.2256C27 18.1484 26.2625 19.9925 24.9497 21.3521C23.637 22.7118 21.8565 23.4756 20 23.4756C18.1435 23.4756 16.363 22.7118 15.0503 21.3521C13.7375 19.9925 13 18.1484 13 16.2256C13 14.3028 13.7375 12.4587 15.0503 11.0991C16.363 9.73942 18.1435 8.97559 20 8.97559ZM20 26.4756C27.735 26.4756 32.5 29.72 32.5 33.7256V41.9756H7.5V33.7256C7.5 29.72 12.265 26.4756 20 26.4756Z"
                                            fill="#767B84" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_3271_11845">
                                            <rect y="0.975586" width="40" height="40" rx="20" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>
                            <div class="user-detail pl-3">
                                <p><span class="text-bold">Your Company</span> email.example.com <a href="#">Unsubscribe</a>
                                </p>
                                <p>
                                    To me <svg xmlns="http://www.w3.org/2000/svg" width="10" height="5" viewBox="0 0 10 5"
                                        fill="none">
                                        <path d="M0.833984 0.308594L5.00065 4.47526L9.16732 0.308594H0.833984Z"
                                            fill="#47505E" />
                                    </svg>
                                </p>
                            </div>
                        </div>
                    </div>
     </section>
    </div>
    </div>
    </div>
    </div>
  )
}

