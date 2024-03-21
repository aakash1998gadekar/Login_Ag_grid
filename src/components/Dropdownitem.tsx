import React from 'react'

export const Dropdownitem = (item) => {
  return (
    <li className="nav-item dropdown px-2 ">
                    <a
                      className="nav-link dropdown-toggle "
                      href="#"
                      id={item.label}
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      {item.label}
                    </a>
                    <div className="dropdown-menu" aria-labelledby={item.label}>
                      {item.child?.map((option, index) => {
                        return (
                          <a
                            key={index}
                            className="dropdown-item"
                            href={option.handler.resource}
                          >
                            {option.label}
                          </a>
                        );
                      })}
                    </div>
                  </li>
  )
}
