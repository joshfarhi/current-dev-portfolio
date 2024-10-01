"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { Flex, ToggleButton } from "@/once-ui/components"
import styles from '@/app/components/Header.module.scss'

import { routes, display } from '@/app/resources'
import { person, home, about, blog, work, gallery } from '@/app/resources'
import React from "react";

export const Header = () => {
    const pathname = usePathname() ?? '';

    return (
        <Flex style={{height: 'fit-content'}}
            className={styles.position}
            as="header"
            zIndex={9}
            fillWidth padding="8"
            justifyContent="center">
            
            <Flex
                background="surface" border="neutral-medium" borderStyle="solid-1" radius="m-4" shadow="l"
                padding="4"
                justifyContent="center">
                <Flex
                    gap="4"
                    textVariant="body-default-s">
                    { routes['/'] && (
                        <ToggleButton
                            prefixIcon="home"
                            href="/"
                            selected={pathname === "/"}>
                            <Flex paddingX="2" hide="s">{home.label}</Flex>
                        </ToggleButton>
                    )}
                    { routes['/about'] && (
                        <ToggleButton
                            prefixIcon="person"
                            href="/about"
                            selected={pathname === "/about"}>
                            <Flex paddingX="2" hide="s">{about.label}</Flex>
                        </ToggleButton>
                    )}
                    { routes['/work'] && (
                        <ToggleButton
                            prefixIcon="grid"
                            href="/work"
                            selected={pathname.startsWith('/work')}>
                            <Flex paddingX="2" hide="s">{work.label}</Flex>
                        </ToggleButton>
                    )}
                    { routes['/blog'] && (
                        <ToggleButton
                            prefixIcon="book"
                            href="/blog"
                            selected={pathname.startsWith('/blog')}>
                            <Flex paddingX="2" hide="s">{blog.label}</Flex>
                        </ToggleButton>
                    )}
                    { routes['/gallery'] && (
                        <ToggleButton
                            prefixIcon="gallery"
                            href="/gallery"
                            selected={pathname.startsWith('/gallery')}>
                            <Flex paddingX="2" hide="s">{gallery.label}</Flex>
                        </ToggleButton>
                    )}
                </Flex>
            </Flex>
        </Flex>
    )
}